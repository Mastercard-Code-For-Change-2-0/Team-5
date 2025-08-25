
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const events = {}; // { eventId: { name, description, registrations: [ { studentName, email, phone, college, yearOfEducation, field, status } ] } }


app.post('/events', (req, res) => {
  const { name, description } = req.body;
  const eventId = uuidv4();
  events[eventId] = { name, description, registrations: [] };
  res.json({ eventId, name, description });
});


app.post('/register', (req, res) => {
  const { eventId, studentName, email, phone, college, yearOfEducation, field, interested } = req.body;
  if (!events[eventId]) {
    return res.status(404).json({ error: 'Event not found' });
  }
  // Generate a unique tracking ID for this registration
  const trackingId = uuidv4();
  // Initial status is 'registered'
  const registration = {
    studentName,
    email,
    phone,
    college,
    yearOfEducation,
    field,
    status: 'registered',
    interested: !!interested,
    trackingId
  };
  events[eventId].registrations.push(registration);
  // Return personalized event info and tracking ID
  res.json({
    message: 'Registered successfully',
    eventId,
    eventName: events[eventId].name,
    trackingId,
    registration
  });
});

app.post('/events/:eventId/update-status', (req, res) => {
  const { email, status } = req.body;
  const event = events[req.params.eventId];
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  const registration = event.registrations.find(r => r.email === email);
  if (!registration) {
    return res.status(404).json({ error: 'Registration not found' });
  }
  registration.status = status;
  res.json({ message: 'Status updated', eventId: req.params.eventId, email, status });
});


app.get('/events/:eventId/funnel', (req, res) => {
  const event = events[req.params.eventId];
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  const funnel = {
    registered: 0,
    attending: 0,
    completed: 0
  };
  event.registrations.forEach(r => {
    if (r.status === 'registered') funnel.registered++;
    else if (r.status === 'attending') funnel.attending++;
    else if (r.status === 'completed') funnel.completed++;
  });
  res.json(funnel);
});

app.get('/events/:eventId/leads', (req, res) => {
  const event = events[req.params.eventId];
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(event.registrations);
});


app.get('/events/:eventId/leads/export', (req, res) => {
  const event = events[req.params.eventId];
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  const registrations = event.registrations;
  if (!registrations || registrations.length === 0) {
    return res.status(404).json({ error: 'No registrations found' });
  }
  
  const header = ['studentName', 'email', 'phone', 'college', 'yearOfEducation', 'field', 'status', 'interested'];
  const csvRows = [header.join(',')];
  
  registrations.forEach(reg => {
    const row = header.map(h => reg[h] || '').join(',');
    csvRows.push(row);
  });
  const csvContent = csvRows.join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename=leads_${req.params.eventId}.csv`);
  res.send(csvContent);
});


app.get('/events/:eventId', (req, res) => {
  const event = events[req.params.eventId];
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(event);
});

app.get('/events', (req, res) => {
  
  const allEvents = Object.entries(events).map(([eventId, event]) => ({
    eventId,
    name: event.name,
    description: event.description,
    registrations: event.registrations
  }));
  res.json(allEvents);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// a618bd83-fa18-47fd-bc28-29ab21f8a2eb

// 5fe1345c-f133-4645-b638-928bf514b44e

// 3f416f51-d474-4af2-9bee-9c8d16327cf8

// 265b9720-8c49-4f06-90ce-c00da6175280  
// a188380c-7d1c-4ed0-a588-83537d285ac3  : eventId
// 8472b6da-27f6-45a4-b03f-6854f37fd64a : trackingId 




 


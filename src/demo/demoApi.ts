// Modo demo: la versión publicada (S3) no tiene la API REST detrás, así que
// respondemos aquí, en el navegador, a las mismas llamadas que hacen los thunks
// contra http://localhost:3001. Los datos viven en memoria y se reinician al recargar.
// En desarrollo (npm run dev) no se activa y se usa la API real.
import roomPhoto from '../assets/room.jpg';
import profilePhoto from '../assets/perfil.jpg';

const API_URL = 'http://localhost:3001';
const DEMO_EMAIL = 'alberto@gmail.com';
const DEMO_PASSWORD = 'alberto1234';

export const isDemoMode = import.meta.env.PROD && !import.meta.env.VITE_DISABLE_DEMO;

type Item = { id: string; [key: string]: unknown };

const db: Record<string, Item[]> = {
  rooms: [
    { id: 'R-0001', photo: roomPhoto, number: '101', name: 'Deluxe A', type: 'Double Bed', amenities: ['AC', 'Shower', 'Double Bed', 'Towel', 'LED TV', 'Wifi'], price: 125, discount: 20, status: 'Available' },
    { id: 'R-0002', photo: roomPhoto, number: '102', name: 'Deluxe B', type: 'Double Superior', amenities: ['AC', 'Bathtub', 'Coffee Set', 'LED TV', 'Wifi'], price: 160, discount: 10, status: 'Booked' },
    { id: 'R-0003', photo: roomPhoto, number: '201', name: 'Suite Mar', type: 'Suite', amenities: ['AC', 'Jacuzzi', 'Sea View', 'Minibar', 'Wifi'], price: 240, discount: 0, status: 'Available' },
    { id: 'R-0004', photo: roomPhoto, number: '202', name: 'Single Basic', type: 'Single Bed', amenities: ['AC', 'Shower', 'Wifi'], price: 70, discount: 0, status: 'Available' },
    { id: 'R-0005', photo: roomPhoto, number: '301', name: 'Family Plus', type: 'Double Bed', amenities: ['AC', 'Shower', 'Sofa Bed', 'LED TV', 'Wifi'], price: 190, discount: 15, status: 'Booked' },
  ],
  bookings: [
    { id: 'B-1001', guest: 'Lucía Romero', orderDate: 'Oct 30th 2026 09:21 AM', checkInDate: 'Nov 2th, 2026', checkInTime: '9:46 PM', checkOutDate: 'Nov 4th, 2026', checkOutTime: '6:12 PM', specialRequest: 'View Notes', specialRequestType: 'default', roomType: 'Deluxe A - 101', status: 'Booked' },
    { id: 'B-1002', guest: 'Javier Morales', orderDate: 'Oct 29th 2026 11:02 AM', checkInDate: 'Nov 5th, 2026', checkInTime: '2:00 PM', checkOutDate: 'Nov 9th, 2026', checkOutTime: '11:00 AM', specialRequest: 'View Notes', specialRequestType: 'default', roomType: 'Suite Mar - 201', status: 'Pending' },
    { id: 'B-1003', guest: 'Carmen Ruiz', orderDate: 'Oct 25th 2026 04:40 PM', checkInDate: 'Oct 27th, 2026', checkInTime: '3:15 PM', checkOutDate: 'Oct 28th, 2026', checkOutTime: '10:30 AM', specialRequest: 'View Notes', specialRequestType: 'default', roomType: 'Single Basic - 202', status: 'Refund' },
    { id: 'B-1004', guest: 'Daniel Ortega', orderDate: 'Oct 20th 2026 08:05 AM', checkInDate: 'Nov 12th, 2026', checkInTime: '1:00 PM', checkOutDate: 'Nov 15th, 2026', checkOutTime: '12:00 PM', specialRequest: 'View Notes', specialRequestType: 'default', roomType: 'Family Plus - 301', status: 'Booked' },
    { id: 'B-1005', guest: 'Sara Vidal', orderDate: 'Oct 18th 2026 06:30 PM', checkInDate: 'Oct 22th, 2026', checkInTime: '4:00 PM', checkOutDate: 'Oct 24th, 2026', checkOutTime: '11:00 AM', specialRequest: 'View Notes', specialRequestType: 'default', roomType: 'Deluxe B - 102', status: 'Canceled' },
  ],
  users: [
    { id: 'U-001', name: 'Marta Gil', email: 'marta.gil@hotelmiranda.demo', profilePhoto, joinDate: 'Mar 3th 2022', jobDesk: 'Recepción: check-in, check-out y atención a huéspedes.', contact: '600 000 001', status: 'ACTIVE' },
    { id: 'U-002', name: 'Pablo Serrano', email: 'pablo.serrano@hotelmiranda.demo', profilePhoto, joinDate: 'Jun 15th 2023', jobDesk: 'Mantenimiento de habitaciones y zonas comunes.', contact: '600 000 002', status: 'ACTIVE' },
    { id: 'U-003', name: 'Elena Navarro', email: 'elena.navarro@hotelmiranda.demo', profilePhoto, joinDate: 'Jan 9th 2021', jobDesk: 'Gestión de reservas y relación con agencias.', contact: '600 000 003', status: 'INACTIVE' },
  ],
  contacts: [
    { id: 'C-01', date: 'Oct 28th 2026', customer: 'Andrea López', email: 'andrea@example.com', phone: '600 111 222', subject: 'Late check-in', comment: 'Llegaremos sobre las 23:00, ¿habrá alguien en recepción?', archived: false },
    { id: 'C-02', date: 'Oct 26th 2026', customer: 'Mario Pérez', email: 'mario@example.com', phone: '600 333 444', subject: 'Parking', comment: '¿El hotel tiene parking para huéspedes? ¿Hay que reservarlo?', archived: false },
    { id: 'C-03', date: 'Oct 21th 2026', customer: 'Nuria Castro', email: 'nuria@example.com', phone: '600 555 666', subject: 'Great stay', comment: 'Todo perfecto, el personal fue muy amable. ¡Volveremos!', archived: true },
  ],
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const readBody = async (init?: RequestInit): Promise<Record<string, unknown>> => {
  try {
    return init?.body ? JSON.parse(String(init.body)) : {};
  } catch {
    return {};
  }
};

const handle = async (url: URL, init?: RequestInit): Promise<Response> => {
  const method = (init?.method ?? 'GET').toUpperCase();
  const [resource, id, action] = url.pathname.split('/').filter(Boolean);

  if (resource === 'login' && method === 'POST') {
    const { email, password } = await readBody(init);
    if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      return json({ message: 'Email o contraseña incorrectos' }, 401);
    }
    return json({ token: 'demo-token', name: 'Alberto' });
  }

  const items = db[resource];
  if (!items) return json({ message: 'Ruta no encontrada' }, 404);
  const index = id ? items.findIndex((item) => item.id === id) : -1;

  if (resource === 'contacts' && action === 'archive' && method === 'PUT') {
    if (index === -1) return json({ message: 'Mensaje no encontrado' }, 404);
    items[index] = { ...items[index], archived: url.searchParams.get('archived') === 'true' };
    return json(items[index]);
  }

  switch (method) {
    case 'GET':
      if (!id) return json(items);
      return index === -1 ? json({ message: 'No encontrado' }, 404) : json(items[index]);
    case 'POST': {
      const created = { ...(await readBody(init)), id: `${resource[0].toUpperCase()}-${Date.now()}` };
      items.push(created);
      return json(created, 201);
    }
    case 'PUT': {
      if (index === -1) return json({ message: 'No encontrado' }, 404);
      items[index] = { ...items[index], ...(await readBody(init)), id: items[index].id };
      return json(items[index]);
    }
    case 'DELETE':
      if (index === -1) return json({ message: 'No encontrado' }, 404);
      items.splice(index, 1);
      return json({ message: 'Eliminado' });
    default:
      return json({ message: 'Método no permitido' }, 405);
  }
};

export const installDemoApi = () => {
  const realFetch = window.fetch.bind(window);
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const href = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
    if (!href.startsWith(API_URL)) return realFetch(input, init);
    await new Promise((resolve) => setTimeout(resolve, 250));
    return handle(new URL(href), init);
  };
};

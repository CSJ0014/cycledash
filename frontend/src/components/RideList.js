// /frontend/src/components/RideList.js
import { MetricCard } from './MetricCard.js';

export function RideList(rides = []) {
  const container = document.createElement('div');
  container.className = 'ride-list';

  if (rides.length === 0) {
    container.innerHTML = '<p>No rides yet.</p>';
    return container;
  }

  rides.forEach(ride => {
    const card = MetricCard(
      ride.title || `Ride on ${ride.date}`,
      ride.distance,
      'mi'
    );
    container.appendChild(card);
  });

  return container;
}

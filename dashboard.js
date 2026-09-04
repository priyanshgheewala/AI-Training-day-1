const state = {
  price: 25412.8,
  base: 25412.8,
  signal: 'BUY',
  confidence: 87,
  running: true,
  trades: 12
};

const $ = (id) => document.getElementById(id);

function updateDashboard() {
  const drift = (Math.random() - 0.47) * 24;
  state.price = Math.max(25280, state.price + drift);
  const pct = ((state.price - state.base) / state.base) * 100;
  state.confidence = Math.min(98, Math.max(62, Math.round(82 + Math.random() * 16)));

  if ($('dashPrice')) $('dashPrice').textContent = state.price.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  if ($('dashChange')) $('dashChange').textContent = `${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%`;
  if ($('dashConfidence')) $('dashConfidence').textContent = `${state.confidence}%`;
  if ($('dashTime')) $('dashTime').textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
}

function setStatus(message) {
  const el = $('engineStatus');
  if (el) el.textContent = message;
}

function toggleEngine() {
  state.running = !state.running;
  const button = $('engineToggle');
  if (button) button.textContent = state.running ? 'Pause engine' : 'Resume engine';
  setStatus(state.running ? 'Strategy engine active' : 'Strategy engine paused');
}

document.addEventListener('DOMContentLoaded', () => {
  $('engineToggle')?.addEventListener('click', toggleEngine);
  $('simulateSignal')?.addEventListener('click', () => {
    state.signal = Math.random() > 0.45 ? 'BUY' : 'WAIT';
    const signal = $('dashSignal');
    if (signal) signal.textContent = state.signal;
    setStatus(`Signal generated · ${state.signal}`);
    setTimeout(() => setStatus(state.running ? 'Strategy engine active' : 'Strategy engine paused'), 1800);
  });
  updateDashboard();
  setInterval(() => { if (state.running) updateDashboard(); }, 1800);
});
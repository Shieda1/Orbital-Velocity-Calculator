// https://calculator.swiftutors.com/orbital-velocity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const orbitalVelocityRadio = document.getElementById('orbitalVelocityRadio');
const gravitationalConstantRadio = document.getElementById('gravitationalConstantRadio');
const massofthebodyatcenterRadio = document.getElementById('massofthebodyatcenterRadio');
const radiusoftheOrbitRadio = document.getElementById('radiusoftheOrbitRadio');

let orbitalVelocity;
let gravitationalConstant = v1;
let massofthebodyatcenter = v2;
let radiusoftheOrbit = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

orbitalVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(G) Gravitational Constant (m³/s² kg)';
  variable2.textContent = '(M) Mass of the body at center (kg)';
  variable3.textContent = '(R) Radius of the Orbit (m)';
  gravitationalConstant = v1;
  massofthebodyatcenter = v2;
  radiusoftheOrbit = v3;
  result.textContent = '';
});

gravitationalConstantRadio.addEventListener('click', function() {
  variable1.textContent = '(Vorbit) Orbital Velocity (km/s)';
  variable2.textContent = '(M) Mass of the body at center (kg)';
  variable3.textContent = '(R) Radius of the Orbit (m)';
  orbitalVelocity = v1;
  massofthebodyatcenter = v2;
  radiusoftheOrbit = v3;
  result.textContent = '';
});

massofthebodyatcenterRadio.addEventListener('click', function() {
  variable1.textContent = '(Vorbit) Orbital Velocity (km/s)';
  variable2.textContent = '(G) Gravitational Constant (m³/s² kg)';
  variable3.textContent = '(R) Radius of the Orbit (m)';
  orbitalVelocity = v1;
  gravitationalConstant = v2;
  radiusoftheOrbit = v3;
  result.textContent = '';
});

radiusoftheOrbitRadio.addEventListener('click', function() {
  variable1.textContent = '(Vorbit) Orbital Velocity (km/s)';
  variable2.textContent = '(G) Gravitational Constant (m³/s² kg)';
  variable3.textContent = '(M) Mass of the body at center (kg)';
  orbitalVelocity = v1;
  gravitationalConstant = v2;
  massofthebodyatcenter = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(orbitalVelocityRadio.checked)
    result.textContent = `Orbital Velocity = ${computeOrbitalVelocity().toFixed(2)} km/s`;

  else if(gravitationalConstantRadio.checked)
    result.textContent = `Gravitational Constant = ${computeGravitationalConstant().toFixed(2)} m³/s² kg`;

  else if(massofthebodyatcenterRadio.checked)
    result.textContent = `Mass of the body at center = ${computeMassofthebodyatcenter().toFixed(2)} kg`;

  else if(radiusoftheOrbitRadio.checked)
    result.textContent = `Radius of the Orbit = ${computeRadiusoftheOrbit().toFixed(2)} m`;
})

// calculation

function computeOrbitalVelocity() {
  return (Math.sqrt((Number(gravitationalConstant.value) * Number(massofthebodyatcenter.value)) / Number(radiusoftheOrbit.value))) / 1000;
}

function computeGravitationalConstant() {
  return ((Math.pow(Number(orbitalVelocity.value), 2) * Number(radiusoftheOrbit.value)) / Number(massofthebodyatcenter.value)) * 1000000;
}

function computeMassofthebodyatcenter() {
  return ((Math.pow(Number(orbitalVelocity.value), 2) * Number(radiusoftheOrbit.value)) / Number(gravitationalConstant.value)) * 1000000;
}

function computeRadiusoftheOrbit() {
  return ((Number(gravitationalConstant.value) * Number(massofthebodyatcenter.value)) / Math.pow(Number(orbitalVelocity.value), 2)) / 1000000;
}
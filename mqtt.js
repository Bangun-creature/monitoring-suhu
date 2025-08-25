// Koneksi ke broker MQTT
const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");

client.on("connect", () => {
  console.log("Terhubung ke broker MQTT");
  client.subscribe("esp32/702/temperature");
  client.subscribe("esp32/702/humidity");
});

client.on("message", (topic, message) => {
  const data = parseFloat(message.toString());

  if (topic === "esp32/702/temperature") {
    document.getElementById("temp-value").innerText = `${data.toFixed(1)}°`;
  }

  if (topic === "esp32/702/humidity") {
    document.getElementById("hum-value").innerHTML = `${data.toFixed(
      1
    )}% <span>RH</span>`;
  }
});

// Tombol On ditekan
document.getElementById("button-on").addEventListener("click", () => {
  client.publish("esp32/702/sprinkler-status", "1");
  console.log("Mengirim status 1 atau High untuk sprinkler");
});

// Tombol Off ditekan
document.getElementById("button-off").addEventListener("click", () => {
  client.publish("esp32/702/sprinkler-status", "0");
  console.log("Mengirim status 0 atau Low untuk sprinkler");
});

const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDischargingTime = document.querySelector(
  ".batteryDischargingTime"
);

function battery() {
  if ("getBattery" in navigator) {
    navigator.getBattery().then(battery => {
      console.log(battery);
      //main function
      function BatteryAllDetails() {
        BatteryLevel();
        BatteryChargingDetails();
        BatteryChargingTime();
        BatteryDischargeTime();
      }
      BatteryAllDetails();

      //battery level
      battery.addEventListener("levelchange", () => {
        BatteryLevel();
      });
      function BatteryLevel() {
        const BatteryLevel = battery.level * 100 + "%";
        console.log(BatteryLevel);
        batteryLevel.innerHTML = BatteryLevel;
      }
      //battery charging?
      function BatteryChargingDetails() {
        const BattCharge = battery.charging ? "Yes" : "No";
        console.log(BattCharge);
        batteryCharging.innerHTML = BattCharge;
      }
      battery.addEventListener("chargingchange", () => {
        BatteryChargingDetails();
      });
      //battery charging time?
      function BatteryChargingTime() {
        const BattChargingTime = battery.chargingTime;
        console.log(BattChargingTime);
        batteryChargingTime.innerHTML = BattChargingTime + " minutes";
      }
      battery.addEventListener("chargingtimechange", () => {
        BatteryChargingTime();
      });
      //battery discharging time?
      function BatteryDischargeTime() {
        const BattDischargeTime = battery.dischargingTime;
        console.log(BattDischargeTime);
        batteryDischargingTime.innerHTML = BattDischargeTime + " minutes";
      }
      battery.addEventListener("dischargingtimechange", () => {
        BatteryDischargeTime();
      });
    });
  }
}
battery();

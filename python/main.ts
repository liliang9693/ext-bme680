//% color="#609bdf" iconWidth=50 iconHeight=40
namespace bme680{

    //% block="BME680 Init" blockType="command" 
    export function bme680_init(parameter: any, block: any) {

        Generator.addImport("from pinpong.libs.dfrobot_bme680 import DFRobot_BME680");
        Generator.addCode("bme680 = DFRobot_BME680()");
   
    }

    //% block="BME680 get sensor data once" blockType="boolean" 
    export function bme680_get_data(parameter: any, block: any) {

        Generator.addImport("from pinpong.libs.dfrobot_bme680 import DFRobot_BME680");
        Generator.addCode("bme680.get_sensor_data()");
   
    }


    //% block="BME680  read [DAT] in data" blockType="reporter" 
    //% DAT.shadow="dropdown"  DAT.options="DAT"
    export function bme680_read_data(parameter: any, block: any) { 
        let dat=parameter.DAT.code;
        Generator.addCode( [`bme680.data.${dat}`,Generator.ORDER_UNARY_POSTFIX]);
   
   }
   

   
}
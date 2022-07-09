// Código para NodeMCU - TCC UNIVESP - ENGENHARIA DE COMPUTAÇÃO 2017/2
// TURMA 12 - CLASSE 04 - 2022
// Fluviometro Digital

// BIBLIOTECAS DO PROJETO
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <PubSubClient.h>
#include <HX711.h>

// CONSTANTES E VARIAVÉIS
#define LEDMCU 16
#define LEDESP 2
#define DPIN 12
#define SPIN 13

char REDE[] = "ssid";
char SENHA[] = "pass";
const char *BROKER = "test.mosquitto.org";
const int PORTA = 1883;
const char *NOME = "ESP8266Cliente";
const char *PUBTOPICO = "TCC2022/chuva_avare_sensor";
float peso = 0;
char feedback [56];

WiFiClient(espClient);
HTTPClient http;
PubSubClient client(BROKER, PORTA, espClient);
HX711 celula_carga;

// Função para gerir portas do MCU
void configPortas() {
  pinMode(LEDMCU, OUTPUT);
  pinMode(LEDESP, OUTPUT);
  delay(1000);
  digitalWrite(LEDMCU, LOW);
  digitalWrite(LEDESP, LOW);
}

// Função de conexão Wifi
void conectaWifi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(REDE, SENHA);
  delay(100);
  digitalWrite(LEDESP, HIGH);
}

// Função de teste e reconexão Wifi
void testaWifi() {
  if(WiFi.isConnected()) {
    digitalWrite(LEDESP, HIGH);
  }else digitalWrite(LEDESP, LOW);
}

// Função de conexão MQTT
void conectaBroker() {
  client.connect(NOME);
  delay(100);
  digitalWrite(LEDMCU, HIGH);
}

// Função de teste e reconexão MQTT
void testaBroker() {
  if(client.connected()) {
    digitalWrite(LEDMCU, HIGH);
  }
  else {
    digitalWrite(LEDMCU, LOW);
    client.connect(NOME);
  }
}

// Função de tratamento da célula de carga
void calibraCelula() {
  celula_carga.begin(DPIN, SPIN);
  celula_carga.set_scale(1990); //(Fator de Calibração Célula 1Kg)
  celula_carga.tare();
}

// Função principal de monitoramento
void sensor() {
  int(peso) = celula_carga.get_units(10);
  client.loop();
  sprintf(feedback, "%d" , peso);
  client.publish(PUBTOPICO, feedback);
  delay(1000);
  http.begin("http://tcc-group4.herokuapp.com/api/v8/fluviometro/12");
  http.GET();
  delay(3000);
}

// Função setup padrão
void setup() {
  configPortas();
  conectaWifi();
  delay(100);
  conectaBroker();
  calibraCelula();
}

// Função loop padrão
void loop() {
  sensor();
  delay(10);
  testaWifi();
  testaBroker();
  delay(100);
}

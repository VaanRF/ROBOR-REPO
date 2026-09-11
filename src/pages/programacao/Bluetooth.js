// src/pages/programacao/Bluetooth.js
import React from 'react';
import CodigoBase from './CodigoBase';

const codigo = `#include <SoftwareSerial.h>

// Pinos do HC-05/HC-06
// RX do Arduino -> TX do módulo
// TX do Arduino -> RX do módulo (via divisor de tensão!)
SoftwareSerial bluetooth(10, 11); // RX, TX

void setup() {
  Serial.begin(9600);       // Monitor Serial
  bluetooth.begin(9600);    // Módulo Bluetooth
  Serial.println("Bluetooth iniciado. Aguardando comandos...");
}

void loop() {
  // Envia do monitor serial para o Bluetooth
  if (Serial.available()) {
    bluetooth.write(Serial.read());
  }

  // Recebe do Bluetooth e envia para o monitor serial
  if (bluetooth.available()) {
    char comando = bluetooth.read();
    Serial.print("Recebido: ");
    Serial.println(comando);

    // Exemplo: liga/desliga LED no pino 13
    if (comando == '1') {
      digitalWrite(13, HIGH);
      bluetooth.println("LED LIGADO");
    } else if (comando == '0') {
      digitalWrite(13, LOW);
      bluetooth.println("LED DESLIGADO");
    }
  }
}`;

export default function Bluetooth() {
  return (
    <CodigoBase
      titulo="📶 Comunicação Bluetooth (HC-05 / HC-06)"
      descricao="Este código permite enviar e receber dados entre o Arduino e um celular (ou computador) via Bluetooth. Ideal para projetos de controle remoto."
      componentes={[
        'Arduino Uno (ou similar)',
        'Módulo Bluetooth HC-05 ou HC-06',
        'LED + resistor 220Ω (opcional, para teste)',
        'Divisor de tensão (1kΩ e 2kΩ) no RX do módulo',
        'Jumpers',
      ]}
      pinagem={[
        'VCC do módulo → 5V do Arduino',
        'GND do módulo → GND do Arduino',
        'TX do módulo → pino 10 (RX virtual)',
        'RX do módulo → pino 11 (TX virtual) via divisor',
      ]}
      codigo={codigo}
      observacoes={[
        '⚠️ O RX do HC-05 trabalha em 3.3V. Use um divisor de tensão para não queimar o módulo.',
        '📱 Use o app "Serial Bluetooth Terminal" (Android) para testar.',
        '🔑 A senha padrão do módulo geralmente é 1234 ou 0000.',
      ]}
    />
  );
}
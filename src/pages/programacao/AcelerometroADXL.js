// src/pages/programacao/AcelerometroADXL.js
import React from 'react';
import CodigoBase from './CodigoBase';

const codigo = `#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL345_U.h>

Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);

void setup() {
  Serial.begin(9600);

  if (!accel.begin()) {
    Serial.println("ADXL345 não detectado. Verifique as conexões I2C.");
    while (1);
  }

  accel.setRange(ADXL345_RANGE_16_G);
  Serial.println("ADXL345 pronto!");
}

void loop() {
  sensors_event_t event;
  accel.getEvent(&event);

  // Aceleração em m/s²
  Serial.print("X: "); Serial.print(event.acceleration.x); Serial.print("  ");
  Serial.print("Y: "); Serial.print(event.acceleration.y); Serial.print("  ");
  Serial.print("Z: "); Serial.print(event.acceleration.z); Serial.println(" m/s²");

  delay(200);
}`;

export default function AcelerometroADXL() {
  return (
    <CodigoBase
      titulo="📐 Acelerômetro ADXL345 (I2C)"
      descricao="O ADXL345 mede aceleração nos eixos X, Y e Z. Muito usado em detecção de inclinação, movimento, queda livre e vibração."
      componentes={[
        'Arduino Uno',
        'Módulo ADXL345 (GY-291)',
        'Jumpers',
      ]}
      pinagem={[
        'VCC → 3.3V do Arduino',
        'GND → GND',
        'SDA → A4 (Uno)',
        'SCL → A5 (Uno)',
      ]}
      bibliotecas={[
        'Adafruit ADXL345 (via Library Manager)',
        'Adafruit Unified Sensor',
        'Wire (nativa)',
      ]}
      codigo={codigo}
      observacoes={[
        '⚠️ Alimente preferencialmente em 3.3V. Em 5V alguns módulos queimam.',
        '📏 Escala padrão de ±16g configurada. Pode mudar para ±2g, ±4g ou ±8g.',
        '🧭 Também é possível usar via SPI (mais rápido, mais fios).',
      ]}
    />
  );
}
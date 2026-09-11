// src/pages/programacao/RFID.js
import React from 'react';
import CodigoBase from './CodigoBase';

const codigo = `#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN  10
#define RST_PIN 9

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();
  Serial.println("Aproxime uma tag RFID do leitor...");
}

void loop() {
  // Verifica se há novo cartão
  if (!rfid.PICC_IsNewCardPresent()) return;
  if (!rfid.PICC_ReadCardSerial()) return;

  Serial.print("UID da tag: ");
  for (byte i = 0; i < rfid.uid.size; i++) {
    Serial.print(rfid.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(rfid.uid.uidByte[i], HEX);
  }
  Serial.println();

  rfid.PICC_HaltA();
  rfid.PCD_StopCrypto1();
}`;

export default function RFID() {
  return (
    <CodigoBase
      titulo="🪪 Leitor RFID MFRC522"
      descricao="Este código lê o UID (identificador único) de tags e cartões RFID. Base para projetos de controle de acesso, presença e autenticação."
      componentes={[
        'Arduino Uno',
        'Módulo RFID RC522',
        'Tags ou cartões RFID (13.56 MHz)',
        'Jumpers',
      ]}
      pinagem={[
        'SDA (SS) → pino 10',
        'SCK → pino 13',
        'MOSI → pino 11',
        'MISO → pino 12',
        'IRQ → não conectado',
        'GND → GND',
        'RST → pino 9',
        '3.3V → 3.3V do Arduino',
      ]}
      bibliotecas={['MFRC522 (by GithubCommunity)']}
      codigo={codigo}
      observacoes={[
        '⚠️ O RC522 funciona SOMENTE em 3.3V. Alimentar em 5V queima o módulo.',
        '📇 Tags comuns: cartão de ônibus, chaveiros, adesivos NTAG.',
        '💾 Guarde os UIDs lidos para comparar em projetos de acesso.',
      ]}
    />
  );
}
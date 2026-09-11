// src/pages/programacao/ControleIR.js
import React from 'react';
import CodigoBase from './CodigoBase';

const codigo = `#include <IRremote.hpp>

#define PINO_IR 2

void setup() {
  Serial.begin(9600);
  IrReceiver.begin(PINO_IR, ENABLE_LED_FEEDBACK);
  Serial.println("Aponte um controle remoto e pressione um botão...");
}

void loop() {
  if (IrReceiver.decode()) {
    Serial.print("Protocolo: ");
    Serial.print(getProtocolString(IrReceiver.decodedIRData.protocol));
    Serial.print("  |  Código: 0x");
    Serial.println(IrReceiver.decodedIRData.command, HEX);

    IrReceiver.resume(); // Prepara para o próximo sinal
  }
}`;

export default function ControleIR() {
  return (
    <CodigoBase
      titulo="🎛️ Controle Infravermelho (IR)"
      descricao="Leia e decodifique sinais de controles remotos. Ideal para projetos de automação residencial, robôs controlados por controle remoto e sistemas de comando."
      componentes={[
        'Arduino Uno',
        'Receptor IR (VS1838B ou similar)',
        'Controle remoto qualquer',
        'Jumpers',
      ]}
      pinagem={[
        'VCC → 5V',
        'GND → GND',
        'OUT (S) → pino 2',
      ]}
      bibliotecas={['IRremote (by Armin Joachimsmeyer)']}
      codigo={codigo}
      observacoes={[
        '📡 Anote os códigos HEX dos botões do seu controle para usar como comandos.',
        '🔁 A biblioteca IRremote 4.x tem API nova. Use a versão mais recente.',
        '💡 Você pode acionar LEDs, motores ou relés com base nos códigos lidos.',
      ]}
    />
  );
}
import chalk from 'chalk';

export default function statusPedido() {
  const statusMensagens = [
    '☕ Preparando sua dose de cafeína...',
    '🛵 Barista a caminho do seu terminal...',
    '✅ Pedido entregue com sucesso!',
    '⚠️ Ops, conexão com a cafeteira falhou. Tente novamente mais tarde.',
  ];

  const status = statusMensagens[Math.floor(Math.random() * statusMensagens.length)];

  console.log(chalk.cyan('\n🔍 Consultando status do seu pedido...\n'));
  console.log(chalk.green(status));
  console.log('');
}

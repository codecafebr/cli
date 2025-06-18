#!/usr/bin/env node
import { program } from 'commander';
import showMenu from '../src/commands/menu.js';
import comprar from '../src/commands/comprar.js';
import statusPedido from '../src/commands/status.js';
import easterEgg from '../src/commands/easteregg.js';

program
  .name('codecafe')
  .description('CLI oficial da CodeCafé para comprar café direto do terminal ☕💻');

program
  .command('menu')
  .description('Ver o cardápio de cafés e produtos')
  .action(showMenu);

program
  .command('comprar')
  .description('Comprar produtos da CodeCafé')
  .action(comprar);

program
  .command('status')
  .description('Verificar status do pedido')
  .action(statusPedido);

program
  .command('easteregg')
  .description('Receber uma mensagem secreta da CodeCafé')
  .action(easterEgg);

program.parse(process.argv);

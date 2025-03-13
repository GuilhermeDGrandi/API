const bcryptyjs = require('bcryptjs')
module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert('users', [
      {
        nome: 'joana',
        email: 'joana@gmail.com',
        password_hash: await bcryptyjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'cleusa',
        email: 'cleusa@gmail.com',
        password_hash: await bcryptyjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'bruno',
        email: 'bruno@gmail.com',
        password_hash: await bcryptyjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'tatycomendo',
        email: 'tatycomendo@gmail.com',
        password_hash: await bcryptyjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'tolimrabano',
        email: 'tolimrabano@gmail.com',
        password_hash: await bcryptyjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'deidecosta',
        email: 'deidecosta@gmail.com',
        password_hash: await bcryptyjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }

    ], {});

  },

  async down() {

  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loggings', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        allowNull: false,
        primaryKey: true,
      },
      requester_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      service: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endpoint: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      method: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      request: {
        type: Sequelize.JSONB,
      },
      response: {
        type: Sequelize.JSONB,
      },
      response_code: {
        type: Sequelize.CHAR(4),
      },
      response_status: {
        type: Sequelize.STRING,
      },
      latency: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('loggings');

  }
};

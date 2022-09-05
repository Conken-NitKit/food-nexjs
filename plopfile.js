module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('apps-api', {
    description: 'Generate a API for the app you specified.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Your api name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}/{{name}}.controller.spec.ts',
        templateFile: 'tools/generators/apps/api/controller.spec.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/{{name}}.controller.ts',
        templateFile: 'tools/generators/apps/api/controller.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/{{name}}.module.ts',
        templateFile: 'tools/generators/apps/api/module.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/{{name}}.service.ts',
        templateFile: 'tools/generators/apps/api/service.ts.hbs',
      },
    ],
  });
};

Dumb componentes (não trabalham com estado ou regras complexas)
 * São usados no ‘declarations’ e no ‘export’ para que o modulo principal acesse o modulo filho

Services
 * ItauHubUtilsModule cuida da pasta shared e é importado dezenas de vezes
 * Service não é importado em módulo, apenas em componente, criando uma instancia para uso e matando a mesma depois
 * .forRoot é usado em services singletons

Declarações em arquivos
 * >@angular
 * >shared
 * >

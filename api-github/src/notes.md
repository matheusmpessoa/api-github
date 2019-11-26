## Observações

Dumb componentes (não trabalham com estado ou regras complexas)
 * Devem ser usados no ‘declarations’ e no ‘export’ de um módulo. Para que assim o módulo principal acesse o modulo filho.

Services
 * ItauHubUtilsModule cuida da pasta shared no hub. O mesmo é importado dezenas de vezes em componentes e em outros módulos
 * Service não é importado em módulo, apenas em componente, criando uma instância para uso e se necessário matando a mesma depois.
 * .forRoot é usado em services singletons

## Boas práticas

Ordem de declaração em arquivos .ts
 * >@angular
 * >shared
 * >

Exemplo
```js
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RepositoriesService } from 'src/shared/services/general/repositories/repositories.service';
```

Utilizar espaçador de tamanho 2 como padrão do projeto.

Compilador Ivy adicionado ao projeto

## Patterns


## Alterações futuras

Criar um CHANGELOG que siga o semantic version. Ao menos em markdown.

Definir uma separação clara entre 'dumb' e 'smart' components.
# SOLID

S.O.L.I.D é um acrônimo criado por **Michael Feathers**, são 5 principios da orientação objeto e design de códigos abordados por Uncle Bob no livro Clean Code.

SOLID é um acrônimo criado por **Michael Feathers**, após observar que cinco princípios da orientação a objetos e design de código, criados por Uncle Bob poderiam se encaixar nesta palavra.

Esses princípios ajudam o programador a escrever códigos mais limpos, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração e estimulando o reaproveitamento do código.

### S (SRP): Single Responsability Principle (Princípio da Responsabilidade Única)

Princípio da Responsabilidade Única — Uma classe deve ter um, e somente um, motivo para mudar.

Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executar.

Quando estamos aprendendo programação orientada a objetos, sem sabermos, damos a uma classe mais de uma responsabilidade e acabamos criando classes que fazem de tudo **God Class**. Num primeiro momento isso pode parecer eficiente, mas como as responsabilidades acabam se misturando, quando há necessidade de realizar alterações nessa classe, será difícil modificar uma dessas responsabilidades sem comprometer as outras. Toda alteração acaba sendo introduzida com um certo nível de incerteza em nosso sistema principalmente se não existirem testes automatizados!

SRP um dos princípios mais importantes, ele acaba sendo a base para outros princípios e padrões porque aborda temas como acoplamento e coesão, características que todo código orientado a objetos deveria ter.

* God Class (Classe Deus): Na programação orientada a objetos, é uma classe que sabe demais ou faz demais.

#### A violação do Single Responsibility Principle pode gerar alguns problemas, sendo eles:

- Falta de coesão, uma classe não deve assumir responsabilidades que não são suas;
- Alto acoplamento, mais responsabilidades geram um maior nível de dependências, deixando o sistema engessado e frágil para alterações;
- Dificuldades na implementação de testes automatizados: É difícil de "mockar" esse tipo de classe;
- Dificuldades para reaproveitar o código;


### O: Open-Closed Principle - OCP (Princípio aberto/fechado):

Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação, ou seja, quando novos comportamentos e recursos precisam ser adicionados no software, devemos estender e não alterar o código fonte original.

Qual o problema de se alterar uma classe ? Não seria mais fácil apenas acrescentar mais um IF ou algo similar para aplicar uma regra? 

Sim, e provavelmente essa seria a solução que programadores menos experientes iriam fazer. Mas, esse é exatamente o problema! Alterar uma classe já existente para adicionar um novo comportamento, corremos um sério risco de introduzir bugs em algo que já estava funcionando.

O que devemos fazer é concentrar nos aspectos essências do contexto, abstraindo-os para uma interface. Se as abstrações são bem definidas, logo o software estará aberto para extensão.


### L: Liskov Substituion Principle - LSP (Princípio de Substituição de Liskov):

Uma classe derivada deve ser substituível por sua classe base.

O princípio da substituição de Liskov foi introduzido por Barbara Liskov em sua conferência “Data abstraction” em 1987. A definição formal de Liskov diz que:

#### Exemplos de violação do LSP:

- Sobrescrever/implementar um método que não faz nada;
- Lançar uma exceção inesperada;
- Retornar valores de tipos diferentes da classe base;

### I: Interface Segregation Princple - ISP (Princípio da Segregação de Interface):

Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar.

Esse princípio basicamente diz que é melhor criar interfaces mais específicas ao invés de termos uma única interface genérica.

### D: Dependency Inversion Principle - DIP (Princípio de Inversão de Dependência):

Dependa de abstrações e não de implementações.

De acordo com Uncle Bob, esse princípio pode ser definido da seguinte forma:

1. Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender da abstração.
  
2. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

No contexto da programação orientada a objetos, é comum que as pessoas confundam a Inversão de Dependência com a Injeção de Dependência, porém são coisas distintas, mas que relacionam entre si com um proposito em comum, deixar o código desacoplado.

A Inversão de Dependência é um princípio (Conceito) e a Injeção de Dependência é um padrão de projeto (Design Pattern).
# Nuxt Starter Kit

###### Another starter kit with Nuxt & Typescript


## Доступные команды

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

### В проекте используются

* Мы пишем компоненты на фреймворке [VueJS](https://vuejs.org/)
* Над VueJS мы используем фреймворк для серверного рендеринга [NuxtJS](https://nuxtjs.org/)
* Для статической типизации используем [TypeScript](https://www.typescriptlang.org) 
* Для хранения состояния приложения(на клиенте и на сервере одновременно) используем [Vuex](https://vuex.vuejs.org)
* Для стандартизации UI элементов приложения [Bootstrap Vue](https://bootstrap-vue.js.org/)
* При создании CSS классов мы опираемся на БЭМ [правила](https://ru.bem.info/methodology/naming-convention/) формировании имен
* Иконки для приложения нам обеспечивает библиотека [Font-Awesome](https://fontawesome.com/)

### VueJS class-styled components

Во VueJS мы описываем компоненты в виде классов(это позволяет нам также наследовать их и использовать как типы) 

```$xslt
@Component({
  
})
export default class extends Vue {

    @State private data;

}
```

Более подробная [документация](https://github.com/vuejs/vue-class-component)

Для обращения к Vuex и Определения классов как компонентов Vue мы используем декораторы из пакета Nuxt Property Decorator

Документация к [декораторам](https://github.com/nuxt-community/nuxt-property-decorator)

### Preloader

Мы используем кастомный прелоадер для анимации загрузки или ожидания ответа.

Пример
```$xslt

import { Preloader } from 'path/to/preloader';

this.preloader = new Preloader(el);

this.preloader.on();

this.preloader.off();

```

Аргумент конструктора прелоадера должен быть HTML элемент или CSS селектор.

Доступные методы:

on - запускает прелоадер

off - останавливает прелоадер

setScale(scale: number) - устанавливает размер прелоадера
 
### CLI

Есть возможность использовать cli  команды для генерации vue  файлов с нужной конфигурацией.

Пример

```$xslt
    yarn frontend --component item
    
    // Будет создан компонент item.vue с пустым шаблоном компонента в папке components
```

Для вызова используется команда frontend, возможные аругменты вызова:
* --component %fileName% - создает компонент с именем %fileName% в папке components
* --store %storeName% - создает модуль vuex с именем %storeName% в папке store 
* --page %pageName% - создает папку с именем %pageName% в папке pages и файл index.vue внутри

Дополнительные параметры:
* --to %path% - используется только в связке с командой component и создает пустой компонент по пути %path% от корневой директории.
* --path %path% - используется с любой командой, создает файл по пути внутри директории этой команды
пример:

```$xslt

yarn frontend --component navItem --path nav/

// создаст компонент navItem по пути components/nav/

yarn frontend --component --navLayout --to layouts/

// создаст компонент navLayout в папке layouts

```

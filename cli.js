const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const path = require('path');

const fileContents = {
    component: `
<template>
  <section>
    
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"

@Component({
  
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
`,
    store: {
        base(storeName){
            return `
import {state as State} from './${storeName}/state';
import {actions as Actions} from './${storeName}/actions';
import {mutations as Mutations} from './${storeName}/mutations';
import {getters as Getters} from './${storeName}/getters';

export const state = State;

export const actions = Actions;

export const mutations = Mutations;

export const getters = Getters;
          `
        },
        state: `
export const state = () => ({

})
      `,
        actions: `
export const actions = {

}
      `,
        mutations: `
export const mutations = {

}
      `,
        getters: `
export const getters = {

}
      `
    }
};

    if(Object.keys(argv).length === 1) throw new Error('No arguments passed');

    const { component, store, page, path: customPath, to } = argv;

    const write = {
        component(){
            const componentPath = to ? path.join(__dirname, `/${to}`) : pathToFile;
            fs.writeFile(`${componentPath}${component}.vue`, fileContents[type], (err) => {
                if (err) throw err;
                console.log(`${component}.vue Component saved at ${componentPath}`);
            });
        },
        store(){
            const pathToFolder = `${pathToFile}/${store}`;
            fs.mkdirSync(pathToFolder);

            fs.writeFile(`${pathToFile}/${store}.ts`, fileContents.store.base(store), (err) => {
                if (err) throw err;
                console.log(`${store}.ts saved`);
            });


            Object.keys(fileContents.store).slice(1, 5).forEach(vuexItem =>
                fs.writeFile(`${pathToFolder}/${vuexItem}.ts`, fileContents.store[vuexItem], (err) => {
                    if (err) throw err;
                    console.log(`${vuexItem}.ts saved`);
                })
            );
        },
        page(){
            const pathToFolder = `${pathToFile}/${page}`;
                fs.mkdirSync(pathToFolder);
                fs.writeFile(`${pathToFolder}/index.vue`, fileContents.component, (err) => {
                    if (err) throw err;
                    console.log(`${page}.ts saved at pages directory`);
                });

        }
    };

    const type = Object.keys(argv)[1];
    const dir = type === 'component' || type === 'page' ? `${type}s` : type;

    const pathToFile = path.join(__dirname, `/${dir}/${customPath || ''}`);

    write[type]();




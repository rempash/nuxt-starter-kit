export class Preloader{

    private el: HTMLElement;
    private html: HTMLElement;

    constructor(el: HTMLElement | string){
        const htmlEl: HTMLElement | null = typeof el === 'string' ? document.querySelector(el) : el;
        if (!htmlEl) throw Error('Preloader selector not found');
        this.el = htmlEl;
        this.html = Preloader.getPreloaderTpl();
    }

    public static getPreloaderTpl(): HTMLElement{
        const innerHTML = '<div class="dogovor_preloader_bg"></div><div class="preloader-img"><img src="/img/preloader/preloader.svg" /></div>';
        const el: HTMLElement = document.createElement('div');
        el.classList.add('dogovor_preloader');
        el.innerHTML = innerHTML;
        return el;
    };

    public on(): void{
        this.el.style.position = 'relative';
        this.el.style.pointerEvents = 'none';
        this.el.appendChild(this.html);
    }

    public off(): void{
        this.el.removeChild(this.html);
        this.el.style.position = '';
        this.el.style.pointerEvents = '';
    }

    public setScale(scale: number){
        (<HTMLElement>this.html.children[1].children[0]).style.transform = `translate(-50%, -50%) scale(${scale})`;
    }

}
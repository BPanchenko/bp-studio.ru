
/**
 * Custom Element: `c-avatar`
 *
 * Markup: <c-avatar
 *              data-src="..."
 *              data-href="..."
 *              data-size="xs|sm|md|lg|xl"
 * />
 */

const CLS = Object.create(null, {
    main: { value: 'c-avatar' },
    link: { value: 'c-avatar__link' },
    img:  { value: 'c-avatar__image' },
    xs:   { value: 'c-avatar--xs' },
    sm:   { value: 'c-avatar--sm' },
    md:   { value: 'c-avatar--md' },
    lg:   { value: 'c-avatar--lg' },
    xl:   { value: 'c-avatar--xl' }
})

class AvatarElement extends HTMLElement {

    static get observedAttributes() {
        return ['data-size']
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return null
        if (!~['xs','sm','md','lg','xl'].indexOf(newValue)) {
            console.warn("Size can take values 'xs', 'sm', 'md', 'lg' or 'xl'")
            return null
        }
        this._container.classList.remove(oldValue)
        this._container.classList.add(newValue)
    }

    connectedCallback() {
        this.render().cleanup()
    }

    render() {
        let { src, href, size, target } = this.dataset
        
        this._container = document.createElement('figure')
        this._container.classList.add(CLS.main)
        this.appendChild(this._container)
        
        if (~['xs','sm','md','lg','xl'].indexOf(size)) {
            this._container.classList.add(CLS[size])
        } else if (size) {
            console.warn("Size can take values 'xs', 'sm', 'md', 'lg' or 'xl'")
        }

        if (href) {
            this._link = document.createElement('a')
            this._link.classList.add(CLS.link)
            this._link.href = href
            this._link.target = target || '_self'
            this._container.appendChild(this._link)
        }

        if (src) {
            this._img = document.createElement('img')
            this._img.classList.add(CLS.img)
            this._img.src = src
            if (this._link) {
                this._link.appendChild(this._img)
            } else {
                this._container.appendChild(this._img)
            }
        }

        return this
    }

    cleanup() {
        this.removeAttribute('data-src')
        this.removeAttribute('data-href')
        this.removeAttribute('data-target')
        return this
    }
}
(function(exports) {
    var switchOnImage = '/img/switch_on.svg';
    var switchOffImage = '/img/switch_off.svg';

    function Switch(pins) {
        exports.BaseComponent.call(this);

        this.ON =false;

        this.dataPin = pins.Switch;

        this.componentsEl = document.querySelector('#components');
    }

    Switch.prototype = Object.create(exports.BaseComponent.prototype);

    Switch.prototype.init = function() {
        var self = this;
        var el = this._el = document.createElement('div');
        el.classList.add('component');
        el.classList.add('Switch');
        var p = document.createElement('p');
        p.classList.add('description');

        p.textContent = 'Switch (' + this.pinNameForPin(this.dataPin) + ')';

        p.appendChild(this.createDestroyEl());
        el.appendChild(p);

        this.ON = false;
        var img = document.createElement('img');
        img.src = switchOffImage;
        img.style.width = '150px';

        el.onmousedown = function() {
            if (this.ON == false){
                window.MbedJSHal.gpio.write(self.dataPin, 1);
                this.ON = true;
                img.src = switchOnImage;
            }
            else {
                window.MbedJSHal.gpio.write(self.dataPin, 0);
                this.ON = false;
                img.src = switchOffImage;
                ;
            }
        };

        el.appendChild(img);
        this.componentsEl.appendChild(el);

    };

    Switch.prototype.destroy = function() {
        window.removeComponent(this);

        this.componentsEl.removeChild(this._el);
    };

    exports.Switch = Switch;

})(window.MbedJSUI);

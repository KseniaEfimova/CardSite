class Slider {
    constructor() {
        this.slider = document.querySelector(".slider");

        let slider = this.slider;

        this.blocks = slider.getElementsByClassName("slider-image");

        this.blockWidth = this.blocks[0].offsetWidth;

        this.currentBlock = slider.firstElementChild;
        this.nextBlock = this.currentBlock;

        this.isDragged = false;
        this.animationIsOn = false;

        this.setPositions(this.currentBlock, this.blocks);

        slider.onmousedown = (e) => {
            this.isDragged = true;
        };

        slider.onmouseup = (e) => {
            this.isDragged = false;
            let direction;
            let pos = parseInt(this.currentBlock.style.left);
            if (pos < 0)
                direction = "left";
            else if (pos > 0)
                direction = "right";
            else
                return;
            if (!this.animationIsOn)
                this.animation(direction);
        };

        slider.onmouseout = slider.onmouseup;

        for (let block of this.blocks) {
            block.onmousemove = (e) => {
                let target = e.target;
                if (this.isDragged && !this.animationIsOn) {
                    this.drag(target, e.movementX);
                }
            };

            block.setAttribute("draggable", "false");
        }

        slider.onclick = (e) => {

        };

        setInterval(() => {
            if (!this.animationIsOn && !this.isDragged) {
                this.nextBlock = this.currentBlock.nextElementSibling || this.slider.firstElementChild;
                this.animation("left");
            }
        }, 4000);
    }

    drag(target, movementX) {
        this.currentBlock = target;

        let pos = parseInt(target.style.left);
        let nextPos = pos + movementX;
        if (nextPos > 0) {
            this.nextBlock = target.previousElementSibling || this.slider.lastElementChild;
            this.nextBlock.style.left = -this.nextBlock.offsetWidth + nextPos + "px";
        } else {
            this.nextBlock = target.nextElementSibling || this.slider.firstElementChild;
            this.nextBlock.style.left = nextPos + this.nextBlock.offsetWidth + "px";
        }
        target.style.left = nextPos + "px";
    }

    animation(direction) {
        this.animationIsOn = true;

        this.currentBlock.classList.add("slider-animation");
        this.nextBlock.classList.add("slider-animation");

        if (direction === "left")
            this.currentBlock.style.left = `-${this.blockWidth}px`;
        else
            this.currentBlock.style.left = `${this.blockWidth}px`;
        this.nextBlock.style.left = "0px";

        this.currentBlock = this.nextBlock;

        setTimeout(() => {
            this.setPositions(this.currentBlock, this.blocks);
            this.animationIsOn = false;
        }, 1000);
    }

    setPositions(currentBlock, blocks) {
        for (let block of blocks) {
            block.classList.remove("slider-animation");
            if (block !== currentBlock) {
                block.style.left = `-${this.blockWidth}px`;
            }
        }
        currentBlock.style.left = "0px";
        let prev = currentBlock.previousElementSibling || this.slider.lastElementChild;
        let next = currentBlock.nextElementSibling || this.slider.firstElementChild;
        next.style.left = `${this.blockWidth}px`;
        prev.style.left = `-${this.blockWidth}px`;
    }
}

let slider = new Slider();
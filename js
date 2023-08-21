import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    activeButtonId = '';

    renderedCallback() {
        const activeButton = this.template.querySelector(`[data-id="${this.activeButtonId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    handleAmountChange(event) {
        const buttonId = event.target.dataset.id;
        this.activeButtonId = buttonId;

        // Remove active class from previously active button
        const previouslyActiveButton = this.template.querySelector('.active');
        if (previouslyActiveButton) {
            previouslyActiveButton.classList.remove('active');
        }

        // Add active class to the clicked button (handled in renderedCallback)
        this.template.querySelector(`[data-id="${buttonId}"]`).classList.add('active');
    }
}

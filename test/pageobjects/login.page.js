import { $ } from '@wdio/globals'
import Page from './page.js';

class ApparelPage extends Page {
    get sortButton () {
        return $('#sort-btn');
    }

    get openButton () {
        return $('#sort-btn open');
    }

    get pricehighButton () {
        return $('[data-sort="price-asc"]');
    }

    get pricelowButton () {
        return $('[data-sort="price-desc"]');
    }

    get span () {
        return $('//span[text()="Price: Low to High"]');
    }
    get nameDescButton () {
        return $('[data-sort="name-desc"]');
    }

    get nameAscButton () {
        return $('[data-sort="name-asc"]');
    }

    get onSaleButton () {
        return $('[data-sort="on-sale"]');
    }

    get newArrivalsButton () {
        return $('[data-sort="new"]');
    }

    async sort () {
        await this.sortButton.click();
        await this.openButton;
        await this.pricehighButton.click();
        await browser.url('https://rippsam.github.io/sportsEquip/index.html?dept=5');
        await this.sortButton.click();
        await this.openButton;
        await this.pricelowButton.click();
        await browser.url('https://rippsam.github.io/sportsEquip/index.html?dept=5');
        await this.sortButton.click();
        await this.openButton;
        await this.nameDescButton.click();
        await browser.url('https://rippsam.github.io/sportsEquip/index.html?dept=5');
        await this.sortButton.click();
        await this.openButton;
        await this.nameAscButton.click();
        await browser.url('https://rippsam.github.io/sportsEquip/index.html?dept=5');
        await this.sortButton.click();
        await this.openButton;
        await this.onSaleButton.click();
        await browser.url('https://rippsam.github.io/sportsEquip/index.html?dept=5');
        await this.sortButton.click();
        await this.openButton;
        await this.newArrivalsButton.click();
        await browser.url('https://rippsam.github.io/sportsEquip/index.html?dept=5');

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('apparel');
    }
}

export default new ApparelPage();

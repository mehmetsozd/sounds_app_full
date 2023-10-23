import { device, element, by, expect } from 'detox';

describe('Kurtlar Vadisi Raconlar', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  describe('Ana Ekran Testi', () => {
    beforeEach(async () => {
      await device.reloadReactNative(); // Uygulamayı yeniden başlat
    });

    it('Başlık görüntülenmeli', async () => {
      await expect(element(by.id('mainTitle'))).toBeVisible();
    });

    it('DERİN DEVLET butonuna basıldığında CharactersScreen\'e yönlendirmelidir', async () => {
      await element(by.id('derinDevletButton')).tap();
      await expect(element(by.id('charactersTitle'))).toBeVisible();
    });
  });
});

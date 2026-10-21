
import { test } from '../fixtures/fixtures';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity.ts';

test('Check Espresso cost is added to Total on menu page', async ({ menuPage }) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();
  await menuPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(1));
});

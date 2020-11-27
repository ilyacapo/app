import {
  createTransportReplayer,
  RecordStore,
} from '@ledgerhq/hw-transport-mocker';

const store = RecordStore.fromString(`
   => e00201000402000000
    <= 41049a322ab016f2ccb2221ed15bbc8bda25bd10618843adf9fd015a206e0bb3c0db20c29a6c7e82d2b6e674aebec650c2e3da7d8edb622afa665b4f8bee86672c1e22385041583376737a5669515732765a5736754d3862367071614e765a5944514a5a74b9ca4b8ae7407037b33ba8274144026b2f9d46152f6b533dcdd79118d63f61769000
`);
const Transport = createTransportReplayer(store);

export default Transport;
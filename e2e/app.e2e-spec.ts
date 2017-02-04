import { NotesPrimeNgPage } from './app.po';

describe('notes-prime-ng App', function() {
  let page: NotesPrimeNgPage;

  beforeEach(() => {
    page = new NotesPrimeNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

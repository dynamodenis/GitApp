import { NullEmailPipe } from './null-email.pipe';

describe('NullEmailPipe', () => {
  it('create an instance', () => {
    const pipe = new NullEmailPipe();
    expect(pipe).toBeTruthy();
  });
});

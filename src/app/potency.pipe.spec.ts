import { PotencyPipe } from './potency.pipe';

describe('PotencyPipe', () => {
  it('create an instance', () => {
    const pipe = new PotencyPipe();
    expect(pipe).toBeTruthy();
  });
});

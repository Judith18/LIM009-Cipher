
describe('Proyecto cipher', () => {

  it('cipher debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
      });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() =>{
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG"
      )});

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() =>{
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg"
      )});
    it('debería retornar " " para " " con offset 32',() =>{
        assert.equal(cipher.encode(32, " ")," "
      )});
    it('debería retornar "$" para "!" con offset 33',() =>{
        assert.equal(cipher.encode(33, "!"),"$"
      )});
    it('debería retornar "3" para "0" con offset 33',() =>{
        assert.equal(cipher.encode(33, "0"),"3"
      )});
    it('debería retornar "?" para ":" con offset 33',() =>{
        assert.equal(cipher.encode(33, ":"),"?"
      )});
    it('debería retornar "enter" para "enter" con offset 15',()=>{
      assert.equal(cipher.encode(15,"\n"),"\n"
      )});
    });


  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      )});

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',() =>{
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz"
      )});
    it('debería retornar " " para " " con offset 32',() =>{
        assert.equal(cipher.decode(32, " ")," "
      )});
    it('debería retornar "#" para "$" con offset 16',() =>{
        assert.equal(cipher.decode(16, "$"),"#"
      )});
    it('debería retornar "4" para "0" con offset 16',() =>{
        assert.equal(cipher.decode(16, "0"),"4"
      )});
    it('debería retornar "?" para ":" con offset 16',() =>{
        assert.equal(cipher.decode(16,":"),"?"
      )});
    it('debería retornar "enter" para "enter" con offset 15',()=>{
        assert.equal(cipher.decode(15,"\n"),"\n"
        )});
})
});


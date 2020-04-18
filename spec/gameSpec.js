describe('Game', function() {

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  })

  it('starts with a frame', function() {
    expect(game._frames[0]).toEqual(frame);
  })

  it('can return current frame', function() {
    expect(game.getFrame()).toEqual(frame);
  })

  it('can bowl a ball', function() {
    expect(game.bowlBall()).toBeDefined;
  })

  it('when a ball is bowled frame score is updated', function() {
    expect(game.bowlBall()).toBeDefined;
  })


  xit('can get frame score', function() {
    expect(game.getFrameScore()).toEqual(0);
  })
})
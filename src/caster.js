
var Caster = function(context) {
  var that = {},
    SCREEN_W = 640,
    SCREEN_H = 480,
    frame, frame_buffer;

  this.draw_slice = function(strip_idx) {
    var step = SCREEN_W * 4;
    var ofs = strip_idx * 4;

    for( var h = 0; h < SCREEN_H; h++ ) {
      frame_buffer[ofs] = strip_idx;
      frame_buffer[ofs+1] = strip_idx;
      frame_buffer[ofs+2] = strip_idx;
      ofs += step;
    }
  };

  this.find_distance_to_wall = function() {
  };

  that.update = function() {
    // setup start angle

    for( var strip_idx = 0; strip_idx < SCREEN_W; strip_idx++ ) {

      // find distance to wall
      // correct for fish-eye
      // calculate projected slice height

      draw_slice(strip_idx);

      // increase angle
    }

    context.putImageData(frame, 0, 0);
  };

  context.canvas.width = SCREEN_W;
  context.canvas.height = SCREEN_H;

  frame = context.createImageData(SCREEN_W, SCREEN_H);

  // Set alpha for every pixel, so we don't have to do it in the rendering loop
  for( var n = 0; n < frame.data.length; n++ ) {
    frame.data[n] = 255;
  }

  frame_buffer = frame.data;

  return that;
};

var keyboard = (function() {

  var bind = {};

  bind.esc = function() {
    window.addEventListener("keydown", function(event) {
      //  esc
      if (event.keyCode == 27) {
        if (state.get().edge) {
          edge.render.clear();
        } else if (state.get().menu) {
          menu.close();
          shade.destroy();
        } else if (state.get().autoSuggest) {
          autoSuggest.destroy();
        } else if (state.get().modal) {
          modal.destroy();
          shade.destroy();
        } else if (state.get().link.edit) {
          helper.setObject({
            object: state.get(),
            path: "link.edit",
            newValue: false
          });
          control.update();
          control.render();
        };
        data.save();
      };
    }, false);
  };

  bind.ctrAltA = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+a
      if (event.ctrlKey && event.altKey && event.keyCode == 65) {
        if (state.get().link.show) {
          menu.close();
          link.render.add();
        };
      };
    }, false);
  };

  bind.ctrAltD = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+d
      if (event.ctrlKey && event.altKey && event.keyCode == 68) {
        theme.toggle();
        theme.render.theme();
        control.update();
        data.save();
      };
    }, false);
  };

  bind.ctrAltM = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        shade.destroy();
        modal.destroy();
        menu.toggle();
      };
    }, false);
  };

  bind.ctrAltE = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+e
      if (event.ctrlKey && event.altKey && event.keyCode == 69) {
        if (state.get().link.show && bookmarks.get().length > 0) {
          if (state.get().link.edit) {
            helper.setObject({
              object: state.get(),
              path: "link.edit",
              newValue: false
            });
          } else {
            helper.setObject({
              object: state.get(),
              path: "link.edit",
              newValue: true
            });
          };
          control.update();
          control.render();
          data.save();
        };
      };
    }, false);
  };

  bind.ctrAltR = function() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+r
      if (state.get().theme.accent.random.active && event.ctrlKey && event.altKey && event.keyCode == 82) {
        theme.render.accent.random();
        theme.render.accent.color();
        link.render.clear();
        link.render.item.all();
        sortable(".link-area");
        data.save();
      };
    }, false);
  };

  var init = function() {
    bind.esc();
    bind.ctrAltA();
    bind.ctrAltD();
    bind.ctrAltM();
    bind.ctrAltE();
    bind.ctrAltR();
  };

  return {
    init: init,
    bind: bind
  };

})();

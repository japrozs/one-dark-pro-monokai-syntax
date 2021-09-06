'use babel';

import InkdropOneDarkProMonokaiSyntaxMessageDialog from './inkdrop-one-dark-pro-monokai-syntax-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(InkdropOneDarkProMonokaiSyntaxMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'InkdropOneDarkProMonokaiSyntaxMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'InkdropOneDarkProMonokaiSyntaxMessageDialog'
    )
    inkdrop.components.deleteClass(InkdropOneDarkProMonokaiSyntaxMessageDialog);
  }

};

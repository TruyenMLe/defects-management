angular
  .module('app')
  .component('defectList', {
    templateUrl: 'app/features/defects/defect-list.component.html',
    controller: function () {
      this.openDefectList = function() {
        this.active = !this.active;
      }
    }
  });

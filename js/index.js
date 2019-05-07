angular
  .module("ftiaxeTimologio", [
    "ngMaterial",
    "ngMessages"
  ])
  .controller("timologioCtrl", function ($scope) {
    $scope.sintelestesFPA = [1.13, 1.24];
    $scope.model = {
      contacts: [
        {
          id: 0,
          perigrafi: "",
          telikoPoso: null,
          fpa: null,
          mm: null,
          arxikoPoso: null,
          sinolikiTimi: null,
          pliromiFpa: null,
          sintelestis: null
        }
      ],
      selected: {}
    };

    $scope.getTemplate = function (contact) {
      return "display";
    };

    $scope.apoforologisi = function apoforologisi(telikoPoso, sintelestis, idx) {
      var sintelestis = $scope.model.contacts[idx].sintelestis;

      var telikoPoso = $scope.model.contacts[idx].telikoPoso;

      var arxikoPoso = (telikoPoso / sintelestis).toFixed(2);

      $scope.model.contacts[idx].arxikoPoso = arxikoPoso;

      var sinolikiTimi = (arxikoPoso * $scope.model.contacts[idx].mm);

      $scope.model.contacts[idx].sinolikiTimi = sinolikiTimi;

      var posoFpa = (telikoPoso - arxikoPoso).toFixed(2);

      $scope.model.contacts[idx].pliromiFpa = posoFpa;

      return arxikoPoso;
    };

    $scope.pricesum = function sinolikitTimiPosotitas(idx) {
      var sinolikiTimi = ($scope.model.contacts[idx].mm * ($scope.apoforologisi())).toFixed(2);
      $scope.model.contacts[idx].sinolikiTimi = sinolikiTimi;
      return sinolikiTimi;
    }

    $scope.addRow = function ($index) {
      $scope.model.contacts.push({
        id: $index,
        perigrafi: "",
        telikoPoso: null,
        fpa: null,
        mm: null,
        arxikoPoso: null,
        sinolikiTimi: null,
        pliromiFpa: null,
        sintelestis: null
      })
    };

    $scope.deleteRow = function (idx) {
      if (idx === 0) {
        $scope.model = {
          contacts: [
            {
              id: idx,
              perigrafi: "",
              telikoPoso: null,
              fpa: null,
              mm: null,
              arxikoPoso: null,
              sinolikiTimi: null,
              pliromiFpa: null,
              sintelestis: null
            }
          ]
        };
      } else {
        $scope.model.contacts.splice(idx, 1);
      }
    };
  })
  
  .filter("FPApercentage", function () {
    return function (sintelestis) {
      var percentage = "";

      if (sintelestis === 1.13) {
        percentage = "13%";
      } else {
        percentage = "24%";
      }

      return percentage;
    };
  });
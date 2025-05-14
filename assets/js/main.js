jQuery(document).ready(function($) {

  // Универсальная фабрика калькуляторов
  function createCalculator(config) {
    const { valueField, phase1Field, phase2Field, ratio1, ratio2 } = config;

    function updateFromValue() {
      let value = parseFloat($(valueField).val()) || 0;
      $(phase1Field).val((value * ratio1).toFixed(2));
      $(phase2Field).val((value * ratio2).toFixed(2));
    }

    function updateFromPhase1() {
      let phase1 = parseFloat($(phase1Field).val()) || 0;
      let value = phase1 / ratio1;
      $(valueField).val(value.toFixed(2));
      $(phase2Field).val((value * ratio2).toFixed(2));
    }

    function updateFromPhase2() {
      let phase2 = parseFloat($(phase2Field).val()) || 0;
      let value = phase2 / ratio2;
      $(valueField).val(value.toFixed(2));
      $(phase1Field).val((value * ratio1).toFixed(2));
    }

    // Назначение обработчиков
    $(valueField).on('keyup change', updateFromValue);
    $(phase1Field).on('keyup change', updateFromPhase1);
    $(phase2Field).on('keyup change', updateFromPhase2);
  }

  // === Использование для fat ===
  createCalculator({
    valueField: "#fat-full",
    phase1Field: "#fat-fase-1",
    phase2Field: "#fat-fase-2",
    ratio1: 0.1,
    ratio2: 0.9
  });

  // === Использование для stamin ===
  createCalculator({
    valueField: "#stamin-full",
    phase1Field: "#stamin-fase-1",
    phase2Field: "#stamin-fase-2",
    ratio1: 0.2,
    ratio2: 0.8
  });

});

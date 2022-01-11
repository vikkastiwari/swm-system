$(".select-category").select2({
  placeholder: "Select a category",
  allowClear: true,
});
$(".select-activity").select2({
  placeholder: "Select an activity",
  allowClear: true,
});

$(".activity-faculty").select2({
  placeholder: "Select Faculty...",
  allowClear: true,
  tags: true,
  tokenSeparators: [",", " "],
});

$(".select-category").on("select2:select", function (e) {
  document
    .querySelector(".select-category")
    .dispatchEvent(new Event("change", { bubbles: true }));
});

$(".activity-faculty").on("select2:select", function (e) {
  document
    .querySelector(".activity-faculty")
    .dispatchEvent(new Event("change", { bubbles: true }));
});

$(".activity-faculty").on("select2:unselect", function (e) {
  document
    .querySelector(".activity-faculty")
    .dispatchEvent(new Event("change", { bubbles: true }));
});

$(".select-activity").on("select2:select", function (e) {
  document
    .querySelector(".select-activity")
    .dispatchEvent(new Event("change", { bubbles: true }));
});

// $(".placeholder").select2({
//   placeholder: "Make a Selection",
//   allowClear: true,
// });

$(".basic").select2({
  tags: true,
});

var formSmall = $(".form-small").select2({ tags: true });
formSmall.data("select2").$container.addClass("form-control-sm");

$(".nested").select2({
  tags: true,
});
$(".tagging").select2({
  tags: true,
});
$(".disabled-results").select2();

function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var baseClass = "flaticon-";
  var $state = $(
    '<span><i class="' +
      baseClass +
      state.element.value.toLowerCase() +
      '" /> ' +
      state.text +
      "</i> </span>"
  );
  return $state;
}

$(".templating").select2({
  templateSelection: formatState,
});

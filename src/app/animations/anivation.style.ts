import {
  animate,
  state,
  style,
  transition,
  trigger,
  group,
} from "@angular/animations";

const MODAL_ANIMATION = trigger("modalAnimation", [
  state("in", style({ opacity: 0 })),
  transition(":leave", [
    style({ opacity: 1, transform: "translateY(0%)" }),
    group([
      animate(
        "400ms ease",
        style({ opacity: 0, transform: "translateY(1000%)" })
      ),
    ]),
  ]),
  transition(":enter", [
    style({ opacity: 0, transform: "translateY(100%)" }),
    group([
      animate("400ms ease", style({ opacity: 1, transform: "translateY(0%)" })),
    ]),
  ]),
]);
export { MODAL_ANIMATION };

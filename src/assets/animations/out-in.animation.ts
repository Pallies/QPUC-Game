import {
  animate,
  AnimationMetadata,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

export const outInAnimation =
  trigger('out-in', [
    state('out', style({
      visibility: 'hidden',
      transform: 'translateX(-50%) scale(0.25)'
    })),
    state('in', style({
      visibility: 'visible',
    })),
    transition('out=>in',
      [animate('.5s')])
  ]) as AnimationMetadata ;

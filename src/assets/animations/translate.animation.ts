import {animate, AnimationMetadata, state, style, transition, trigger} from "@angular/animations";

export const translateAnimation =
  trigger('translate', [
    state('middle', style({
      transform: 'translateX(0)'
    })),
    state('left', style({
      transform: 'translateX(-50%)'
    })),
    state('right', style({
      transform: 'translateX(+50%)'
    })),
    transition('middle=>left', [animate('.5s')]),
    transition('middle=>right', [animate('.5s')]),
    transition('left=>middle',[animate('.5s')]),
    transition('right=>middle',[animate('.5s')]),
    transition('left=>right',[animate('.5s')]),
    transition('right=>left',[animate('.5s')]),
  ]) as AnimationMetadata ;

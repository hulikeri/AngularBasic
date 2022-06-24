import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
selector: '[mwFavorite]'
})
export class FavoriteDirective{
@HostBinding('class.is-favorite') isFavorite = true;
@HostBinding('class.is-favorite-hovering') isHovering = false;

@HostListener('mouseenter') OnMouseHovering()
{
this.isHovering = true;
}
@HostListener('mouseleave') OnMouseLeave()
{
    this.isHovering = false;
}
@Input() set mwFavorite(value: any){
    this.isFavorite= value;
}
}
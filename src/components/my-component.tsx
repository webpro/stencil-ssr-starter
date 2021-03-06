import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  @Prop() first: string;

  @Prop() last: string;

  @Method() handleClick() {
    console.log('click');
  }

  render() {
    return (
      <div>
        <p onClick={this.handleClick}>
          Hello, my name is {this.first} {this.last}
        </p>
      </div>
    );
  }
}

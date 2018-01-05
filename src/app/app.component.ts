import { Component } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // Create a tree with the following shape:
    //
    //   A
    //   +--> B
    //   +--> C
  nodes: TreeNode[] = [
    {
      label: 'A',
      data: 'A',
      expanded: true,
      children: [
        { label: 'B', data: 'B' },
        { label: 'C', data: 'C' },
      ]
    }
  ];

  selectedValues: TreeNode[] = [];

  selectEntry(): void {
    // Add the "C" tree node to the selection
    const node = this.nodes[0].children[1];
    this.selectedValues = this.selectedValues.concat(node);
  }
}

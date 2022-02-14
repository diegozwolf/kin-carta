import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Inject} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { DOCUMENT } from '@angular/common';


interface QuestionNode {
  name: string;
  children?: QuestionNode[];
}

const TREE_DATA: QuestionNode[] = [
  {
    name: 'Question 1',
    children: [{name: 'Apple'}],
  },
  {
    name: 'Question 2',
    children: [ {name: 'Banana'}]
  },
  {
    name: 'Question 3',
    children: [ {name: 'Lemon'}]
  }

];

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  isOpen: boolean = false;

  treeControl = new NestedTreeControl<QuestionNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<QuestionNode>();

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: QuestionNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }
  // toggleTree(){
  //   this.isOpen = !this.isOpen;
  // }

}



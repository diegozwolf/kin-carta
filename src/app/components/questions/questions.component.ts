import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Inject, ViewEncapsulation} from '@angular/core';
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
  styleUrls: ['./questions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionsComponent {

  isOpen: boolean = false;
  title1: string = "Pellentesque egestas a nisl et imperdiet";
  title2: string = "Integer semper vehicula egestas.";
  content1: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed feugiat lorem. Duis ac pharetra lacus, quis mattis felis.Nam bibendum mattis purus, at posuere nunc mattis ut. Proin commodo facilisis feugiat. Proin convallis massa sit amet pharetra tempus. Duis tincidunt tellus massa, nec tempor odio mattis et. Maecenas viverra orci et ipsum consequat pellentesque. Aenean ligula leo, suscipit nec pulvinar a, faucibus condimentum metus. Vestibulum ligula lectus  Nam pretium velit ac maximus imperdiet. Nam molestie accumsan aliquet. Quisque et quam vulputate, commodo elit ut, ultricies nunc. Vivamus est tortor, ultricies id sodales ac, eleifend vitae arcu.";
  content2: string = "Ut mollis, ipsum condimentum porta imperdiet, lacus quam cursus leo, sit amet suscipit elit erat et elit. Nunc a purus pulvinar, tempus purus vestibulum, lobortis massa. Donec vitae est ex. Sed vulputate libero nec tellus dapibus pharetra. Mauris pretium mauris vel felis euismod, ut sodales tortor molestie. Cras at pharetra enim. Donec pulvinar, felis a convallis consectetur, metus mauris vehicula enim, sed viverra ante arcu ut felis. Phasellus in felis at odio imperdiet consequat scelerisque eu quam. Curabitur ac pretium massa. Etiam viverra vulputate eros in volutpat.";


  treeControl = new NestedTreeControl<QuestionNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<QuestionNode>();

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: QuestionNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}



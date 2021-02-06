import SerenityBDD from './SerenityBDD'
import FirstStep from './FirstStep'
import Prerequisites from './Prerequisites'
import ScreenplayPattern from './ScreenplayPattern'
import SolidDesignPattern  from './SolidDesignPattern'
import PurposeOfSolidDesignPattern from './PurposeOfSolidDesignPattern'
import BuildingBlockOfScreenplayPattern from './BuildingBlockOfScreenplayPattern'
import StepAnnotation from './StepAnnotation'
import Dependencies from './Dependencies'
import SerenityConf from './SerenityConf'
import TestRunner from './TestRunner'
import BeforeImplementation from './BeforeImplementation.vue'
import HowToPreventFlakiness from './HowToPreventFlakiness.vue'
import StepDefinitions from './StepDefinitions.vue'

const pages = [
  {
    name: 'serenityBDD',
    meta: {
      title: 'SerenityBDD'
    },
    component: SerenityBDD
  },
  {
    name: 'first-step',
    meta: {
      title: 'First Step in SerenityBDD'
    },
    component: FirstStep
  },
  {
    name: 'pre-requisites',
    meta: {
      title: 'Pre-requisites'
    },
    component: Prerequisites
  },
  {
    name: 'screenplay-pattern',
    meta: {
      title: 'Screenplay Pattern'
    },
    component: ScreenplayPattern
  },
  {
    name: 'solid design pattern',
    meta: {
      title: 'Solid Design Pattern'
    },
    component: SolidDesignPattern
  },
  {
    name: 'purpose of solid design pattern',
    meta: {
      title: 'Purpose of Solid Design Pattern'
    },
    component: PurposeOfSolidDesignPattern
  },
  {
    name: 'building blocks of screenplay pattern',
    meta: {
      title: '5 Building Blocks of Screenplay Pattern'
    }, 
    component: BuildingBlockOfScreenplayPattern
  },
  {
    name: 'step annotation',
    meta: {
      title: 'Step Annotation'
    }, 
    component: StepAnnotation
  },
  {
    name: 'dependencies pom.xml',
    meta: {
      title: 'Dependencies'
    }, 
    component: Dependencies
  },
  {
    name: 'serenity conf',
    meta: {
      title: 'Serenity Conf'
    }, 
    component: SerenityConf
  },
  {
    name: 'test runner',
    meta: {
      title: 'Test Runner'
    }, 
    component: TestRunner
  },
  {
    name: 'before implementation',
    meta: {
      title: 'Before Implementation'
    }, 
    component: BeforeImplementation
  },
  {
    name: 'how to prevent flakinesss',
    meta: {
      title: 'How to prevent flakiness'
    }, 
    component: HowToPreventFlakiness
  },
  {
    name: 'how to make step definitions make readable using DSL',
    meta: {
      title: 'How to make step definitions make readable using DSL'
    }, 
    component: StepDefinitions
  },
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages